package at.enough.dashboard.security.configuration;

import at.enough.dashboard.filter.CustomAuthenticationFilter;
import at.enough.dashboard.filter.CustomAuthorizationFilter;
import at.enough.dashboard.security.util.JWTConverter;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.build.Plugin;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.Arrays;

@RequiredArgsConstructor
@EnableWebSecurity
@EnableWebMvc
public class SecurityConfiguration {

    private final JWTConverter jwtConverter;


    @Bean
    BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http, @Value("${security.set-authorization}") Boolean setAuthorization) throws Exception {
        CustomAuthenticationFilter authenticationFilter = new CustomAuthenticationFilter(
                authenticationManager(http.getSharedObject(AuthenticationConfiguration.class)),
                jwtConverter);
        authenticationFilter.setFilterProcessesUrl("/api/auth/login");

        OncePerRequestFilter customAuthorizationFilter = new CustomAuthorizationFilter(jwtConverter);

        http.csrf().disable();
        http.cors();
        if (!setAuthorization) {
            http.authorizeRequests().anyRequest().permitAll();
        } else {
/*            http.authorizeRequests().antMatchers("/api/v1/budget/**").permitAll();
            http.authorizeRequests().antMatchers("/api/shopping-list/**").permitAll();*/
            http.authorizeRequests().antMatchers("/api/auth/**").permitAll();
            http.authorizeRequests().anyRequest().authenticated();
        }
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilter(authenticationFilter);
        http.addFilterBefore(customAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(@Value("${security.cors.origin}") String origin) {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


}
