public class Resultat {
    private int note;
    private String theme;
    private String nom;
    private String prenom;

    public Resultat(int note, String theme, String nom, String prenom) {
        this.note = note;
        this.theme = theme;
        this.nom = nom;
        this.prenom = prenom;
    }

    // Getters
    public int getNote() {
        return note;
    }

    public String getTheme() {
        return theme;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }
}
