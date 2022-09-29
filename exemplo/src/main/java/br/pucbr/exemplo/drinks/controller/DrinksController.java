package br.pucbr.exemplo.drinks.controller;

import br.pucbr.exemplo.drinks.entity.Drinks;
import br.pucbr.exemplo.drinks.service.DrinksService;
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
@RequestMapping("/drinks")
@SecurityScheme(
        name = "Bearer",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer"
)
public class DrinksController {

    @Autowired
    DrinksService drinksService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Drinks drinks) throws ExcecaoExemplo {
        drinks = drinksService.salvar(drinks);
        return new ResponseEntity<>(drinks, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Drinks> listar() {
        return drinksService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Drinks> buscarPorId(@PathVariable("id") Integer id) {
        try {
            Drinks drinks = drinksService.buscarPorId(id);
            return new ResponseEntity<>(drinks, HttpStatus.OK);
        } catch (NoSuchElementException | ExcecaoExemplo ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Integer id) {
        drinksService.excluir(id);
    }

}
