package br.pucbr.exemplo.usuario.controller;

import br.pucbr.exemplo.usuario.entity.Usuario;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @PostMapping
    public Usuario salvar(@RequestBody Usuario usuario) {
        System.out.println(usuario);

        return usuario;
    }

    @GetMapping
    public List<Usuario> listar() {
        Usuario u = new Usuario();
        u.setId(1);

        List<Usuario> usuarios = new ArrayList<>();
        usuarios.add(u);
        return usuarios;
    }

}
