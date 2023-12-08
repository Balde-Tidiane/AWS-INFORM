public class AUTOMAT {

    // Attribute
    private String Zustand;

    // Bedingungen
    private boolean nicht_in_Reichweite;
    private boolean in_Reichweite;

    // Methoden

    // Konstruktor
    public AUTOMAT() {
        // Startzustand setzen
        Zustand = "auf Patrouille";
        System.out.println("Startzustand: auf Patrouille");
    }

    // Ausgelöste Aktion "stehen bleiben"
    private void stehen_bleiben() {
        // Hier den Code für die ausgelöste Aktion eingeben!
        System.out.println("Ausgelöste Aktion stehen_bleiben() wurde aufgerufen!");
    }

    // Ausgelöste Aktion "Patrouille aufnehmen"
    private void Patrouille_aufnehmen() {
        // Hier den Code für die ausgelöste Aktion eingeben!
        System.out.println("Ausgelöste Aktion Patrouille_aufnehmen() wurde aufgerufen!");
    }

    // Ausgelöste Aktion "verfolge Gegner"
    private void verfolge_Gegner() {
        // Hier den Code für die ausgelöste Aktion eingeben!
        System.out.println("Ausgelöste Aktion verfolge_Gegner() wurde aufgerufen!");
    }

    // Ausgelöste Aktion "gehen nach Wachposition"
    private void gehen_nach_Wachposition() {
        // Hier den Code für die ausgelöste Aktion eingeben!
        System.out.println("Ausgelöste Aktion gehen_nach_Wachposition() wurde aufgerufen!");
    }

    // Auslösende Aktion "hört Geräusch"
    public void hört_Geräusch() {
        if (Zustand.equals("auf Patrouille")) {
            stehen_bleiben();
            Zustand = "misstrauisch";
            System.out.println("Neuer Zustand: misstrauisch");
            return;
        }
    }

    // Auslösende Aktion "Zeit vergeht"
    public void Zeit_vergeht() {
        if (Zustand.equals("misstrauisch")) {
            Patrouille_aufnehmen();
            Zustand = "auf Patrouille";
            System.out.println("Neuer Zustand: auf Patrouille");
            return;
        }
        if (Zustand.equals("verfolgend") && nicht_in_Reichweite == true) {
            gehen_nach_Wachposition();
            Zustand = "misstrauisch";
            System.out.println("Neuer Zustand: misstrauisch");
            return;
        }
        if (Zustand.equals("verfolgend") && in_Reichweite == true) {
            verfolge_Gegner();
            Zustand = "verfolgend";
            System.out.println("Neuer Zustand: verfolgend");
            return;
        }
    }

    // Auslösende Aktion "sieht Gegner"
    public void sieht_Gegner() {
        if (Zustand.equals("misstrauisch")) {
            verfolge_Gegner();
            Zustand = "verfolgend";
            System.out.println("Neuer Zustand: verfolgend");
            return;
        }
        if (Zustand.equals("auf Patrouille")) {
            verfolge_Gegner();
            Zustand = "verfolgend";
            System.out.println("Neuer Zustand: verfolgend");
            return;
        }
    }

}