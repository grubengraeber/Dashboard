package at.enough.dashboard.filter;

import io.swagger.v3.oas.models.headers.Header;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.http.HttpHeaders;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Slf4j
public class CustomAuthorizationFilter extends OncePerRequestFilter {

    //todo Post request, mapping every request execpt of login and registration
    //todo checking for authorization: BEARER + TOKEN
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        if (request.getRequestURI().startsWith("/api/auth/")) {
            filterChain.doFilter(request, response);
        } else {
            String bearerPrefix = "BEARER ";
            String authorizationToken = request.getHeader(AUTHORIZATION);
            if (authorizationToken != null && authorizationToken.startsWith("BEARER ")) {
                String token = authorizationToken.substring(bearerPrefix.length());
                log.info("full Header token: " + token);
                log.info("Substring token: " + token);
            }



        }

    }
}
