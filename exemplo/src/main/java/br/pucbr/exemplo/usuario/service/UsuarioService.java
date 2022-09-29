package br.pucbr.exemplo.usuario.service;

import br.pucbr.exemplo.usuario.entity.Usuario;
import br.pucbr.exemplo.usuario.repository.UsuarioRepository;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario) throws ExcecaoExemplo {
        if (usuario.getNome() == null || usuario.getNome().equals("")) {
            //lanco um erro
            throw new ExcecaoExemplo("ERR001","O dados não podem ser nulos.");
        } else if (usuario.getNome().length() > 60) {
            throw new ExcecaoExemplo("ERRO03", "O nome do usuário não pode conter mais que 60 caracteres.");
        } else if ((usuario.getLogin() == null) || usuario.getLogin().equals("")) {
            throw new ExcecaoExemplo("ERR001","O dados dos usuário não podem ser nulos.");
        } else if (usuario.getLogin().length() > 20) {
            throw new ExcecaoExemplo("ERRO04", "O login do usuário não pode conter mais que 20 caracteres.");
        } else {
            return usuarioRepository.save(usuario);
        }
    }

    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    public Usuario buscarPorId(Integer id) throws ExcecaoExemplo {
        if( id == null) {
           throw new ExcecaoExemplo("ERRO03", "Usuário não encontrado.");
        }

        try {
            Usuario usuario = usuarioRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new ExcecaoExemplo("ERRO03", "Usuário não encontrado.");
        }


        return usuarioRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        usuarioRepository.deleteById(id);
    }

}
