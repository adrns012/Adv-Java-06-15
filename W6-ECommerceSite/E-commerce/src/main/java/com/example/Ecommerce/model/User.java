package com.example.Ecommerce.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.Collection;
import java.util.Map;
import java.util.Set;


@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User implements UserDetails {

    @Transient
    private boolean accountExpired;
    @Transient
    private boolean accountNonLocked = true;
    @Transient
    private boolean credentialsNonExpired = true;
    @Transient
    private boolean enabled = true;
    @Transient
    private Collection<GrantedAuthority> authorities = null;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String email;
    private String password;
    private String username;
    private String firstName;
    private String lastName;

    @CreationTimestamp
    private ZonedDateTime createdAt;


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name="user_id"),
    inverseJoinColumns = @JoinColumn(name="role_id"))
    private Set<Role> roles;


    @ElementCollection
    private Map<Product, Integer> cart;


    @Override
    public boolean isAccountNonExpired() {
        return false;
    }
}
