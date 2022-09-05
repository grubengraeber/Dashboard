package at.enough.dashboard.filter;

import at.enough.dashboard.util.JWTConverter;
import com.nimbusds.jwt.JWTClaimsSet;
import io.swagger.v3.oas.models.headers.Header;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.http.HttpHeaders;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

/**
 * Workflow:
 *  - check for route not login or signup
 *  - check for bearer token
 *  - decode jwt bearer token -> get subject and roles
 *  - map authorities from jwt claim roles
 *  - create new authentication
 *  - pass to SecurityContextHolder
 */
@RequiredArgsConstructor
@Slf4j
public class CustomAuthorizationFilter extends OncePerRequestFilter {

    private final JWTConverter jwtConverter;


    //todo Post request, mapping every request execpt of login and registration
    //todo checking for authorization: BEARER + TOKEN
    @SneakyThrows
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        if (request.getRequestURI().startsWith("/api/auth/")) {
            filterChain.doFilter(request, response);
        } else {
            String bearerPrefix = "Bearer ";
            String authorizationToken = request.getHeader(AUTHORIZATION);
            if (authorizationToken != null && authorizationToken.startsWith(bearerPrefix)) {
                String token = authorizationToken.substring(bearerPrefix.length());
                log.info("Substring token: " + token);
                JWTClaimsSet claimsSet = jwtConverter.decodeToken(token);
                String userIdentifier = claimsSet.getSubject();
                log.info("useridentifier = " + userIdentifier);

                List<String> roles =  claimsSet.getStringListClaim("authorities");
                log.info("authorities: " + roles);
                List<SimpleGrantedAuthority> authorities = roles.stream()
                        .map(SimpleGrantedAuthority::new)
                        .toList();
                UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(userIdentifier, null, authorities);

                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
            filterChain.doFilter(request, response);


        }

    }
}
