package br.pucbr.exemplo.harmonizacao.service;

import br.pucbr.exemplo.harmonizacao.entity.Harmonizacao;
import br.pucbr.exemplo.harmonizacao.repository.HarmonizacaoRepository;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HarmonizacaoService {

    @Autowired
    private HarmonizacaoRepository usuarioRepository;

    public Harmonizacao salvar(Harmonizacao usuario) throws ExcecaoExemplo {
        if (usuario.getNome() == null || usuario.getNome().equals("") || usuario.getNome().length() > 300) {
            //lanco um erro
            throw new ExcecaoExemplo("ERR001","O dados dos usuário estão errados manow.");
        }

        return usuarioRepository.save(usuario);
    }

    public List<Harmonizacao> listar() {
        return usuarioRepository.findAll();
    }

    public Harmonizacao buscarPorId(Integer id) {
        return usuarioRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        usuarioRepository.deleteById(id);
    }

}
