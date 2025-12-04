import { MapPin, Phone, Mail } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    info: "801 TechCorp Plaza, Maruti Millennium Tower, Baner, Pune, India",
    link: "https://maps.app.goo.gl/PBooT9pJ8PrwdMPUA", // Link to the address
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "hello@techcorp.com",
    link: "mailto:hello@techcorp.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 (555) 123-4567",
    link: "tel:+915551234567",
  },
];

export default function ContactDetailsMap() {
  return (
    <div className="space-y-12">
      {/* Contact Information Section */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Contact Information
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          We're here to help. Reach out to us via phone, email, or visit our
          office.
        </p>
        <div className="space-y-6">
          {contactDetails.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1 p-3 rounded-lg bg-primary/10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.info}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Visit Us</h2>
        <div className="relative w-full aspect-[16/10] rounded-2xl border border-border shadow-soft overflow-hidden">
          {/* Replace this iframe 'src' with your own Google Maps embed code.
            1. Go to Google Maps
            2. Find your address
            3. Click "Share"
            4. Click "Embed a map"
            5. Copy the HTML and paste the 'src' URL here.
          */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.2415602205647!2d73.77000505104596!3d18.552245553207616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb299de07b7%3A0xa25f94c8aa2ef3c!2sMaruti%20Millennium%20Tower!5e0!3m2!1sen!2sin!4v1764837608825!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
