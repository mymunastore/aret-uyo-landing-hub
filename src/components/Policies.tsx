import { Shield, Eye, AlertTriangle, Lock } from "lucide-react";

const Policies = () => {
  const policies = [
    {
      icon: <Eye className="text-primary" size={24} />,
      title: "Privacy Policy",
      content: [
        "At ARET Environmental Services, we are committed to safeguarding sensitive information. Our strict privacy policies cover the following:",
        "• Personal data of employees, clients, and partners",
        "• Confidential business strategies, financial records, and operational details", 
        "• Digital communications and electronic records",
        "Employees must handle all confidential information with discretion and comply with all applicable privacy laws and company guidelines. Breaches of confidentiality are taken very seriously and may result in immediate corrective actions, including potential termination."
      ]
    },
    {
      icon: <AlertTriangle className="text-primary" size={24} />,
      title: "Conflict of Interest Policy",
      content: [
        "A conflict of interest arises when personal interests interfere with professional obligations. To maintain the integrity of our operations, employees are required to:",
        "1. Disclose any potential conflicts of interest to their immediate supervisor or the HR Division",
        "2. Abstain from participating in any decision-making processes where personal interests may compromise objectivity",
        "3. Refrain from engaging in external business activities that directly compete with or undermine our corporate interests",
        "Failure to report or address conflicts of interest may lead to disciplinary action, including termination."
      ]
    },
    {
      icon: <Lock className="text-primary" size={24} />,
      title: "Data Security and Digital Ethics Policy", 
      content: [
        "In today's digital era, data security is paramount. Our policies ensure that:",
        "1. All digital communications, data storage, and online transactions are conducted using secure, company-approved systems",
        "2. Employees are trained in cybersecurity best practices to prevent unauthorized access and data breaches",
        "3. Any suspicious activity or potential threats to data security are immediately reported to the IT Department",
        "Digital ethics require that employees maintain professionalism online, ensuring that all interactions and shared content reflect our core values and corporate mission."
      ]
    }
  ];

  return (
    <section id="policies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="text-primary mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Policies & Standards
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest standards of business ethics, data security, and professional conduct.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {policies.map((policy, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    {policy.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {policy.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {policy.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Certificate Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-primary text-primary-foreground rounded-xl p-8 text-center shadow-glow">
            <div className="border-2 border-primary-foreground/20 rounded-lg p-6 bg-primary-foreground/5">
              <h3 className="text-2xl font-bold mb-4">CERTIFICATE OF REGISTRATION</h3>
              <div className="space-y-2 text-lg">
                <p><strong>BUSINESS NAME:</strong> ARET ENVIRONMENTAL SERVICES</p>
                <p><strong>REGISTRATION NO.:</strong> 8278298</p>
                <p className="text-sm opacity-90 mt-4">
                  <strong>UNDER THE GENERAL CORPORATE AFFAIRS COMMISSION</strong>
                </p>
                <p className="text-sm opacity-90">
                  This certifies that ARET ENVIRONMENTAL SERVICES is officially registered as a business name under the <strong>COMPANIES AND ALLIED MATTERS ACT 2020.</strong>
                </p>
                <div className="mt-6 pt-4 border-t border-primary-foreground/20">
                  <p className="text-sm">
                    <strong>The general nature of the business is:</strong><br />
                    WASTE DISPOSAL, MANAGEMENT, AND RECYCLING.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;