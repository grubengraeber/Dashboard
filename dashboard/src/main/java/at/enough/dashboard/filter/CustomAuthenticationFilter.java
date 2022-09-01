package at.enough.dashboard.filter;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.KeyLengthException;
import com.nimbusds.jose.crypto.MACSigner;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;

    /**
     * attempts an authentication with username and password - serving the authenticationManager
     * with an Authentication (Used Implementation of the UsernamePasswordToken)
     *
     * @param request  from which to extract parameters and perform the authentication
     * @param response the response, which may be needed if the implementation has to do a
     *                 redirect as part of a multi-stage authentication process (such as OpenID).
     * @return
     * @throws AuthenticationException
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) throws AuthenticationException {

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(username, password);

        return authenticationManager.authenticate(token);
    }

    //todo create the jwt authentication token
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authentication) throws IOException, ServletException {
        //Create token expires? How does Nimbus work? How to create a Token
        //TODO create Util class for JWT Serialization, secrets via ApplicationPropperties
        try {
            JWSSigner signer = new MACSigner("secret");
            JWSHeader header = new JWSHeader(JWSAlgorithm.ES256);
            //todo https://connect2id.com/products/nimbus-jose-jwt/examples/jwt-with-hmac
//            JWSObject jwsObject = JWS


        } catch (KeyLengthException e) {
            throw new RuntimeException(e);
        }

        //create refresh token


        super.successfulAuthentication(request, response, chain, authentication);
    }
}
