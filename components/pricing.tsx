import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pricing() {
  const plans = [
    {
      name: "Art Enthusiast",
      price: "$29",
      features: [
        "Early access to new drops",
        "Digital gallery previews",
        "Monthly art newsletter",
        "Community forum access",
      ],
    },
    {
      name: "Collector",
      price: "$99",
      features: [
        "All Enthusiast features",
        "Private viewing invitations",
        "Free global shipping",
        "Dedicated art consultant",
        "Quarterly physical art book",
      ],
      popular: true,
    },
    {
      name: "Patron",
      price: "$249",
      features: [
        "All Collector features",
        "VIP lounge access",
        "Exclusive artist meet-and-greets",
        "Custom art sourcing",
        "Lifetime platform membership",
      ],
    },
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl mb-4 text-center">Membership Plans</h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        Join our inner circle and experience art with exclusive benefits and priority access.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-10 rounded-[3rem] border border-primary/10 shadow-xl transition-all hover:-translate-y-2 duration-300 ${
              plan.popular ? "bg-white ring-2 ring-primary scale-105" : "bg-[#f9f7f0]"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            )}
            <h3 className="font-serif text-3xl mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "default" : "outline"}
              className={`w-full rounded-full py-6 text-lg ${
                plan.popular
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary/5"
              }`}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
