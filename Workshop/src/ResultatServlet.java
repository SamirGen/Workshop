/*import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/resultats")
public class ResultatServlet extends HttpServlet {
    private ResultatDAO resultatDAO = new ResultatDAO();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Récupère la liste des résultats
        List<Resultat> resultats = resultatDAO.getAllResultats();

        // Configuration de la réponse en HTML
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Créer le tableau HTML
        out.println("<html>");
        out.println("<head><title>Liste des résultats</title></head>");
        out.println("<body>");
        out.println("<h2>Liste des résultats</h2>");
        out.println("<table border='1'>");
        out.println("<tr><th>Note</th><th>Thème</th><th>Nom</th><th>Prénom</th></tr>");

        for (Resultat resultat : resultats) {
            out.println("<tr>");
            out.println("<td>" + resultat.getNote() + "</td>");
            out.println("<td>" + resultat.getTheme() + "</td>");
            out.println("<td>" + resultat.getNom() + "</td>");
            out.println("<td>" + resultat.getPrenom() + "</td>");
            out.println("</tr>");
        }

        out.println("</table>");
        out.println("</body>");
        out.println("</html>");
    }
}
*/