package at.enough.dashboard.security.util;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

/**
 * A Wrapper for nimbus-jose library for basic application usage of encode and decode
 * https://connect2id.com/products/nimbus-jose-jwt/examples/jwt-with-hmac
 */
@Component
public class JWTConverter {

    private final String secret;
    private final JWSHeader jwsHeader;
    private final int expirationTime;
    private final JWSSigner jwsSigner;


    @SneakyThrows
    public JWTConverter(@Value("${security.jwt.secret}") String secret,
                        @Value("${security.jwt.expiration-time}") int expirationTime) {
        this.secret = secret;
        this.expirationTime = expirationTime;
        JWSAlgorithm algorithm = JWSAlgorithm.HS256;
        jwsHeader = new JWSHeader(algorithm);
        jwsSigner = new MACSigner(secret);
    }

    /**
     * creates and signs a jwt token with the authentication (principal information)
     *
     * @param userIdentifier for applicationUser (userName, email...)
     * @param authorities    are GrantedAuthorities of the User mapped to list of strings
     * @return an encoded/signed JWT token
     */
    @SneakyThrows
    public String getAuthorizationToken(String userIdentifier, List<String> authorities) {
        Date issueTime = new Date();
        JWTClaimsSet claimSet = buildClaimSet(userIdentifier, authorities, issueTime);
        SignedJWT signedJWT = new SignedJWT(jwsHeader, claimSet);
        signedJWT.sign(jwsSigner);
        return signedJWT.serialize();
    }

    //todo refactor for refresh token -> generateToken


    private JWTClaimsSet buildClaimSet(String userIdentifier,
                                       List<String> authorities,
                                       Date issueTime) {
        return new JWTClaimsSet.Builder()
                .subject(userIdentifier)
                .claim("authorities", authorities)
                .issueTime(issueTime)
                .expirationTime(new Date(issueTime.getTime() + expirationTime))
                .build();
    }

    @SneakyThrows
    public JWTClaimsSet decodeToken(String authToken) {
        SignedJWT signedJWT = SignedJWT.parse(authToken);
        JWSVerifier verifier = new MACVerifier(secret);
        signedJWT.verify(verifier);
        return signedJWT.getJWTClaimsSet();

    }


}
