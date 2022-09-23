package br.pucbr.exemplo.harmonizacao.repository;

import br.pucbr.exemplo.harmonizacao.entity.Harmonizacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HarmonizacaoRepository extends JpaRepository<Harmonizacao,Integer> {
}
