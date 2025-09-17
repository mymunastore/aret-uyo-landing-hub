import { Shield, Eye, AlertTriangle, Lock, Calculator, Leaf } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Policies = () => {
  const [wasteKg, setWasteKg] = useState("");
  const [energyKwh, setEnergyKwh] = useState("");
  const [waterLiters, setWaterLiters] = useState("");
  const [transportKm, setTransportKm] = useState("");
  const [carbonFootprint, setCarbonFootprint] = useState<number | null>(null);

  const calculateFootprint = () => {
    // Carbon emission factors (kg CO2 equivalent)
    const wasteEmissionFactor = 0.5; // kg CO2 per kg waste
    const energyEmissionFactor = 0.4; // kg CO2 per kWh
    const waterEmissionFactor = 0.001; // kg CO2 per liter
    const transportEmissionFactor = 0.2; // kg CO2 per km

    const wasteEmissions = (parseFloat(wasteKg) || 0) * wasteEmissionFactor;
    const energyEmissions = (parseFloat(energyKwh) || 0) * energyEmissionFactor;
    const waterEmissions = (parseFloat(waterLiters) || 0) * waterEmissionFactor;
    const transportEmissions = (parseFloat(transportKm) || 0) * transportEmissionFactor;

    const totalFootprint = wasteEmissions + energyEmissions + waterEmissions + transportEmissions;
    setCarbonFootprint(totalFootprint);
  };

  const resetCalculator = () => {
    setWasteKg("");
    setEnergyKwh("");
    setWaterLiters("");
    setTransportKm("");
    setCarbonFootprint(null);
  };
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

        {/* Carbon Footprint Calculator Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-primary text-primary-foreground rounded-xl p-8 text-center shadow-glow">
            <div className="border-2 border-primary-foreground/20 rounded-lg p-6 bg-primary-foreground/5">
              <div className="flex items-center justify-center mb-6">
                <Calculator className="mr-3" size={32} />
                <h3 className="text-2xl font-bold">Carbon Footprint Calculator</h3>
              </div>
              
              <p className="text-sm opacity-90 mb-6">
                Calculate your environmental impact and discover how ARET can help reduce your carbon footprint
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-left">
                <div>
                  <Label htmlFor="waste" className="text-primary-foreground text-sm font-medium">
                    Monthly Waste (kg)
                  </Label>
                  <Input
                    id="waste"
                    type="number"
                    placeholder="e.g., 150"
                    value={wasteKg}
                    onChange={(e) => setWasteKg(e.target.value)}
                    className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                
                <div>
                  <Label htmlFor="energy" className="text-primary-foreground text-sm font-medium">
                    Monthly Energy (kWh)
                  </Label>
                  <Input
                    id="energy"
                    type="number"
                    placeholder="e.g., 300"
                    value={energyKwh}
                    onChange={(e) => setEnergyKwh(e.target.value)}
                    className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                
                <div>
                  <Label htmlFor="water" className="text-primary-foreground text-sm font-medium">
                    Monthly Water (liters)
                  </Label>
                  <Input
                    id="water"
                    type="number"
                    placeholder="e.g., 5000"
                    value={waterLiters}
                    onChange={(e) => setWaterLiters(e.target.value)}
                    className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                
                <div>
                  <Label htmlFor="transport" className="text-primary-foreground text-sm font-medium">
                    Monthly Transport (km)
                  </Label>
                  <Input
                    id="transport"
                    type="number"
                    placeholder="e.g., 500"
                    value={transportKm}
                    onChange={(e) => setTransportKm(e.target.value)}
                    className="mt-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-center mb-6">
                <Button 
                  onClick={calculateFootprint}
                  variant="secondary" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Calculator className="mr-2" size={16} />
                  Calculate Impact
                </Button>
                <Button 
                  onClick={resetCalculator}
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground bg-primary-foreground/20 hover:bg-primary-foreground/30 border-2"
                >
                  Reset
                </Button>
              </div>

              {carbonFootprint !== null && (
                <div className="border-t border-primary-foreground/20 pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Leaf className="mr-2" size={24} />
                    <h4 className="text-xl font-bold">Your Carbon Footprint</h4>
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    {carbonFootprint.toFixed(2)} kg CO₂
                  </div>
                  <p className="text-sm opacity-90">
                    per month equivalent emissions
                  </p>
                  <div className="mt-4 p-4 bg-primary-foreground/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Reduce your impact:</strong> Partner with ARET for sustainable waste management, 
                      recycling programs, and environmental consulting to lower your carbon footprint.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;