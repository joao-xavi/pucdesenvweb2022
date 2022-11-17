package br.pucbr.exemplo.drinks.entity;

import br.pucbr.exemplo.ingredientes.entity.Ingredientes;

import javax.persistence.*;

@Entity
@Table(name = "DRINKS")
public class Drinks {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "NOME", nullable = false, unique = true)
    private String nome;

    @Column(name = "DESCRICAO", nullable = false, unique = true)
    private String descricao;

    @Column(name = "CATEGORIA", nullable = false, unique = true)
    private String categoria;

    @Column(name = "IMAGEM", nullable = false, unique = true)
    private String imagem;

    //@ManyToMany
    //@JoinColumn(name = "id")
    //private Ingredientes ingredienteId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
