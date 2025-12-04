import { Zap, Code2, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Code2,
    label: "Modern Technologies",
    value: "50+",
    color: "from-primary to-primary-deep",
  },
  {
    icon: Clock,
    label: "Support Availability",
    value: "24/7",
    color: "from-secondary to-primary",
  },
  {
    icon: Zap,
    label: "On-Time Delivery",
    value: "100%",
    color: "from-accent to-secondary",
  },
  {
    icon: Award,
    label: "Commitment to Quality", // Vague but positive
    value: "100%",
    color: "from-primary to-accent",
  },
];

export default function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-foreground via-primary-deep to-foreground">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-gray-300">
            Numbers that speak to our commitment and success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 cursor-default overflow-hidden"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${
                    index * 0.1
                  }s forwards`,
                  opacity: 0,
                }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Icon with 3D effect */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-glow-color transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Stats */}
                <div className="relative z-10 text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-300">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative corner glow */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${stat.color} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 h-1 w-full max-w-3xl mx-auto rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .shadow-glow {
          box-shadow: 0 0 60px rgba(255, 255, 255, 0.2), 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .shadow-glow-color {
          box-shadow: 0 0 40px currentColor;
        }
      `}</style>
    </section>
  );
}
