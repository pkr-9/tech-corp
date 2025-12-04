import React from "react";
import { cn } from "@/lib/utils";

interface StackingCardsProps {
  children: React.ReactNode;
  className?: string;
}

export default function StackingCards({
  children,
  className,
}: StackingCardsProps) {
  // Flatten children to handle fragments or arrays properly
  const items = React.Children.toArray(children);
  const numCards = items.length;

  return (
    <div className={cn("relative w-full", className)}>
      <ul
        id="stacking-cards-list"
        style={{ "--numcards": numCards } as React.CSSProperties}
      >
        {items.map((child, index) => (
          <li
            key={index}
            className="stacking-card sticky top-0"
            style={{ "--index": index + 1 } as React.CSSProperties}
          >
            <div className="stacking-card__content bg-background border border-border shadow-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden">
              {child}
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        :root {
          --card-top-offset: 1.5rem; /* Space between card headers when stacked */
          --card-margin-x: 1rem;     /* Horizontal margin for the floating effect */
          --card-margin-b: 4rem;     /* Bottom margin */
        }

        @media (min-width: 640px) {
          :root {
            --card-top-offset: 2rem;
            --card-margin-x: 2rem;
          }
        }

        #stacking-cards-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          /* Create space at bottom so the last card can be scrolled fully */
          padding-bottom: calc(var(--numcards) * var(--card-top-offset));
          /* Add some side spacing so cards look like floating layers */
          padding-left: var(--card-margin-x);
          padding-right: var(--card-margin-x);
          margin-bottom: var(--card-margin-b);
        }

        .stacking-card {
          /* Sticky positioning creates the stacking behavior */
          position: sticky;
          /* Calculate top position: Navbar Height (approx 5rem) + Offset based on index */
          top: calc(5rem + (var(--index) * var(--card-top-offset)));
          /* Padding top ensures content doesn't get hidden under the previous card's bottom */
          padding-top: calc(var(--index) * var(--card-top-offset) * 0.5);
        }

        .stacking-card__content {
          transform-origin: 50% 0%;
          will-change: transform;
          /* Ensure cards have a substantial height to scroll through */
          min-height: 80vh; 
          height: 100%;
          display: flex;
          flex-direction: column;
          /* Visual styling */
          box-shadow: 0 -10px 40px rgba(0,0,0,0.05);
        }

        /* SCROLL-DRIVEN ANIMATION (Modern Browsers) */
        @supports (animation-timeline: view()) {
          .stacking-card__content {
            --index0: calc(var(--index) - 1);
            --reverse-index: calc(var(--numcards) - var(--index0));
            --reverse-index0: calc(var(--reverse-index) - 1);
            
            animation: scale-card linear forwards;
            animation-timeline: view();
            /* Animate as the element exits the viewport (scrolls up) */
            animation-range: exit-crossing 0% exit-crossing 100%;
          }

          @keyframes scale-card {
            to {
              /* Scale down slightly and dim to create depth */
              transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
              opacity: calc(1 - (var(--reverse-index0) * 0.15));
              filter: brightness(0.9);
            }
          }
        }
      `}</style>
    </div>
  );
}
