package br.pucbr.exemplo.harmonizacao.service;

import br.pucbr.exemplo.harmonizacao.entity.Harmonizacao;
import br.pucbr.exemplo.harmonizacao.repository.HarmonizacaoRepository;
import br.pucbr.exemplo.ingredientes.entity.Ingredientes;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class HarmonizacaoService {

    @Autowired
    private HarmonizacaoRepository harmonizacaoRepository;

    public Harmonizacao salvar(Harmonizacao harmonizacao) throws ExcecaoExemplo {
        if (harmonizacao.getNome() == null || harmonizacao.getNome().equals("")) {
            throw new ExcecaoExemplo("ERR001","O dados não podem ser nulos.");
        } else if (harmonizacao.getNome().length() > 30) {
            throw new ExcecaoExemplo("ERRO04", "O nome da harmonização não pode conter mais que 30 caracteres.");
        } else {
            return harmonizacaoRepository.save(harmonizacao);
        }
    }

    public List<Harmonizacao> listar() {
        return harmonizacaoRepository.findAll();
    }

    public Harmonizacao buscarPorId(Integer id) throws ExcecaoExemplo {
        if( id == null) {
            throw new ExcecaoExemplo("ERRO06", "Harmonização não encontrada.");
        }

        try {
            Harmonizacao harmonizacao = harmonizacaoRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new ExcecaoExemplo("ERRO06", "Harmonização não encontrada.");
        }
        return harmonizacaoRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        harmonizacaoRepository.deleteById(id);
    }

}
