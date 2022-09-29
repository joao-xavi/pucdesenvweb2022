package br.pucbr.exemplo.harmonizacao.controller;

import br.pucbr.exemplo.harmonizacao.entity.Harmonizacao;
import br.pucbr.exemplo.harmonizacao.service.HarmonizacaoService;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/harmonizacao")
@SecurityScheme(
        name = "Bearer",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer"
)
public class HarmonizacaoController {

    @Autowired
    HarmonizacaoService harmonizacaoService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Harmonizacao harmonizacao) throws ExcecaoExemplo {
        harmonizacao = this.harmonizacaoService.salvar(harmonizacao);
        return new ResponseEntity<>(harmonizacaoService, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Harmonizacao> listar() {
        return harmonizacaoService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Harmonizacao> buscarPorId(@PathVariable("id") Integer id) {
        try {
            Harmonizacao harmonizacao = harmonizacaoService.buscarPorId(id);
            return new ResponseEntity<>(harmonizacao, HttpStatus.OK);
        } catch (NoSuchElementException | ExcecaoExemplo ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Integer id) {
        harmonizacaoService.excluir(id);
    }

}
