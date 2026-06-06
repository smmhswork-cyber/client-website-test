import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const hours = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday - Thursday', time: '9:00 AM - 5:00 PM' },
    { day: 'Friday', time: '9:00 AM - 4:00 PM' },
    { day: 'Saturday', time: 'Call for hours' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Hours */}
          <div>
            <h2 className="text-3xl md:text-4xl text-foreground mb-8 flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary" />
              Hours
            </h2>
            <div className="space-y-4">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl text-foreground mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    1217 Taft Hwy
                    <br />
                    Signal Mountain, TN 37377
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href="tel:(423)886-4037"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    (423) 886-4037
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:heather.cookielady@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors break-all"
                  >
                    heather.cookielady@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-64 rounded-lg overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.8726577850467!2d-85.3087!3d35.1889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860b5c8e8e8e8e9%3A0x1234567890abcdef!2s1217%20Taft%20Hwy%2C%20Signal%20Mountain%2C%20TN%2037377!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
