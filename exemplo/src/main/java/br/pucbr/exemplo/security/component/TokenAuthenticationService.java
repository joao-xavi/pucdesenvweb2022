package br.pucbr.exemplo.security.component;

import br.pucbr.exemplo.security.model.Autenticacao;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

public class TokenAuthenticationService {

    // EXPIRATION_TIME = 100 anos
    static final long EXPIRATION_TIME = (100 * 365 * 24 * 60 * 60 * 1000);
    static final String SECRET = "SatPlugin0101";
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    public static Autenticacao getToken(HttpServletResponse response, String username,
                                        Collection<? extends GrantedAuthority> authorities, Integer guidUsuario) {
        ArrayList<String> authsList = new ArrayList<>(authorities.size());

        for (GrantedAuthority authority : authorities) {
            authsList.add(authority.getAuthority());
        }

        String token = Jwts.builder()
                .claim("ROLES", authsList)
                .claim("GUIDUSUARIO", guidUsuario)
                .setSubject(username)
                // .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET).compact();

        Autenticacao autenticacao = new Autenticacao();
        autenticacao.setToken(token);
        autenticacao.setLogin(username);

        return autenticacao;
    }

    @SuppressWarnings("unchecked")
    public static Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HEADER_STRING);

        if (token != null) {

            // faz parse do token
            Claims claims = null;

            try {

                claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, "")).getBody();

            } catch (ExpiredJwtException e) {
                claims = e.getClaims();
            }

            if (claims != null) {

                ArrayList<String> authsList = (ArrayList<String>) claims.get("ROLES");

                if (claims.getSubject() != null) {
                    authsList = (ArrayList<String>) claims.get("ROLES");

                    List<GrantedAuthority> authorities = new ArrayList<>(authsList.size());

                    for (String role : authsList) {
                        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
                    }

                    return new UsernamePasswordAuthenticationToken(claims.getSubject(), authorities, authorities);
                }

            }
        }
        return null;
    }

    public static Map<String, String> getValuesFromToken(HttpServletRequest request) {

        String token = request.getHeader(HEADER_STRING);

        if (token != null) {

            // faz parse do token
            Claims claims = null;

            try {

                claims = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, "")).getBody();

            } catch (ExpiredJwtException e) {
                claims = e.getClaims();
            }

            if (claims != null) {

                Map<String, String> values = new HashMap<String, String>();

                Integer guidUsuario = (Integer) claims.get("GUIDUSUARIO");
                values.put("guidUsuario", guidUsuario == null ? null : guidUsuario.toString());

                return values;

            }

        }

        return null;

    }

}

