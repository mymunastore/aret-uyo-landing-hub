import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Leaf, TrendingDown } from "lucide-react";

const CarbonFootprintCalculator = () => {
  const [wasteAmount, setWasteAmount] = useState("");
  const [wasteType, setWasteType] = useState("");
  const [frequency, setFrequency] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateFootprint = () => {
    if (!wasteAmount || !wasteType || !frequency) return;

    // Carbon footprint factors (kg CO2 per kg waste)
    const factors: { [key: string]: number } = {
      "general": 0.5,
      "organic": 0.3,
      "plastic": 2.1,
      "paper": 0.9,
      "glass": 0.2,
      "metal": 1.8
    };

    // Frequency multipliers (per year)
    const frequencyMultipliers: { [key: string]: number } = {
      "daily": 365,
      "weekly": 52,
      "biweekly": 26,
      "monthly": 12
    };

    const amount = parseFloat(wasteAmount);
    const factor = factors[wasteType] || 0.5;
    const multiplier = frequencyMultipliers[frequency] || 52;

    const annualFootprint = amount * factor * multiplier;
    setResult(annualFootprint);
  };

  const reset = () => {
    setWasteAmount("");
    setWasteType("");
    setFrequency("");
    setResult(null);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Calculator className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm">ENVIRONMENTAL IMPACT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Carbon Footprint <span className="text-primary">Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your waste's environmental impact and discover how ARET's services can help reduce your carbon footprint.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="shadow-elegant hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient flex items-center gap-2">
                  <Calculator size={24} />
                  Calculate Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Weekly Waste Amount (kg)</label>
                  <Input
                    type="number"
                    placeholder="Enter amount in kg"
                    value={wasteAmount}
                    onChange={(e) => setWasteAmount(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Waste Type</label>
                  <Select value={wasteType} onValueChange={setWasteType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select waste type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Waste</SelectItem>
                      <SelectItem value="organic">Organic Waste</SelectItem>
                      <SelectItem value="plastic">Plastic</SelectItem>
                      <SelectItem value="paper">Paper</SelectItem>
                      <SelectItem value="glass">Glass</SelectItem>
                      <SelectItem value="metal">Metal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Collection Frequency</label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4">
                  <Button onClick={calculateFootprint} className="flex-1">
                    Calculate Impact
                  </Button>
                  <Button onClick={reset} variant="outline">
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient flex items-center gap-2">
                  <Leaf size={24} />
                  Your Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                {result !== null ? (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {result.toFixed(2)} kg
                      </div>
                      <p className="text-muted-foreground">CO₂ emissions per year</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                        <TrendingDown className="text-green-600" size={20} />
                        <div>
                          <p className="font-medium text-green-800 dark:text-green-200">
                            Potential Reduction with ARET
                          </p>
                          <p className="text-sm text-green-600 dark:text-green-300">
                            Up to {(result * 0.3).toFixed(2)} kg CO₂ saved annually through our recycling programs
                          </p>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground space-y-2">
                        <p><strong>How we help reduce your footprint:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Efficient collection routes reduce transportation emissions</li>
                          <li>Advanced recycling programs divert waste from landfills</li>
                          <li>Proper waste segregation maximizes recycling potential</li>
                          <li>Composting programs for organic waste</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                      Fill in the form to calculate your carbon footprint
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-primary text-primary-foreground p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Reduce Your Impact?</h3>
              <p className="mb-6 opacity-90">
                Join ARET Environmental Services and be part of the solution for a sustainable future.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started Today
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonFootprintCalculator;