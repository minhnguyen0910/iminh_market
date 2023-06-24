package com.example.minhmarket.security.userPrincipal;


import com.example.minhmarket.model.Account;
import com.example.minhmarket.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailService implements UserDetailsService {
    @Autowired
    private AccountRepository accountRepository;
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) {
        try {
            Account accountUser = accountRepository.findByName(username).get();
            return UserPrinciple.build(accountUser);
        } catch(UsernameNotFoundException e) {
            e.getMessage();
        }
        return null;
    }
}
