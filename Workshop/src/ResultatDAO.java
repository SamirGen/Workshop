import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ResultatDAO {
    private static final String URL = "jdbc:mysql://localhost:3306/workshopm2"; // URL de connexion
    private static final String USER = "votre_nom_utilisateur"; // Nom d'utilisateur MySQL
    private static final String PASSWORD = "votre_mot_de_passe"; // Mot de passe MySQL

    public List<Resultat> getAllResultats() {
        List<Resultat> resultats = new ArrayList<>();

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD)) {
            String query = "SELECT note, theme, nom, prenom FROM resultat"; // On ne sélectionne pas id_resultat
            PreparedStatement statement = conn.prepareStatement(query);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                int note = resultSet.getInt("note");
                String theme = resultSet.getString("theme");
                String nom = resultSet.getString("nom");
                String prenom = resultSet.getString("prenom");

                Resultat resultat = new Resultat(note, theme, nom, prenom);
                resultats.add(resultat);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return resultats;
    }
}
