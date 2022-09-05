package at.enough.dashboard.util;

import com.nimbusds.jwt.JWTClaimsSet;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.TestComponent;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

@TestComponent
class JWTConverterTest {

    JWTConverter jwtConverter = new JWTConverter("secretLengthMustBeAtLeas256Bitsa", 1);

    @Test
    void testGettingAnAuthorizationToken() {
        String token = jwtConverter.getAuthorizationToken(
                "testUserName",
                List.of("test1", "test2"));
        Assertions.assertFalse(token.isEmpty());

    }

    @Test
    void decodeAuthorizationToken() throws ParseException {
        String expectedUsername = "testUserName";
        List<String> expectedAuthorities = new ArrayList<>(List.of("testAuth1", "testAuth2"));

        String token = jwtConverter.getAuthorizationToken(
                expectedUsername,
                expectedAuthorities);

        JWTClaimsSet result = jwtConverter.decodeToken(token);
        Assertions.assertEquals(expectedUsername, result.getSubject());
        Assertions.assertEquals(expectedAuthorities, result.getStringListClaim("authorities"));

        }


}