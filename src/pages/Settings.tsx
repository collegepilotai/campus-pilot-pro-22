import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import { Loader2, User, CreditCard, Bell } from "lucide-react";

const Settings = () => {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container max-w-2xl pt-24 pb-12">
        <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Settings</h1>

        {/* Profile */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <User className="h-5 w-5 text-primary" />
            <h2 className="font-heading font-semibold text-foreground">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label className="text-foreground text-sm">Full Name</Label>
              <Input
                defaultValue="Jane Doe"
                className="mt-1 border-border/50 bg-secondary/50 text-foreground"
              />
            </div>
            <div>
              <Label className="text-foreground text-sm">Email</Label>
              <Input
                defaultValue="jane@stanford.edu"
                disabled
                className="mt-1 border-border/50 bg-secondary/50 text-foreground opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <CreditCard className="h-5 w-5 text-primary" />
            <h2 className="font-heading font-semibold text-foreground">Subscription</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Free Plan</p>
              <p className="text-xs text-muted-foreground">5 documents/month · Basic features</p>
            </div>
            <Button size="sm" className="gradient-bg border-0 text-primary-foreground hover:opacity-90">
              Upgrade
            </Button>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="font-heading font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-3">
            {["Study reminders", "Weekly progress report", "Product updates"].map((item) => (
              <label key={item} className="flex items-center justify-between cursor-pointer">
                <span className="text-sm text-foreground">{item}</span>
                <input type="checkbox" defaultChecked className="accent-primary h-4 w-4" />
              </label>
            ))}
          </div>
        </div>

        <Button
          onClick={handleSave}
          disabled={saving}
          className="w-full gradient-bg border-0 text-primary-foreground hover:opacity-90"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save Changes"}
        </Button>
      </main>
    </div>
  );
};

export default Settings;
