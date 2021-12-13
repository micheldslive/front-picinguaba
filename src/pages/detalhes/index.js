import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { api } from "services/api";


const Detalhes = () => {
  const [produtos, setProdutos] = useState();
  const params = useParams();

  useEffect(() => {
    api.get(`produtos/${params.id}`).then((res) => {
      setProdutos(res.data[0]);
    });
  }, [params]);

  return (
    <div className="DetalhesContent">
      <Container className="DetalhesContainer">
        <Row>
          <Col className="col-lg-6 col-md-6 col-12">
            <div className="CardContainer">
              <div className="CardImagem">
                <img src={produtos?.imagem} alt="imagem-1" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-6 col-md-6 col-12">
            <div className="CardContent">
              <p className="Titulo">{produtos.nome}</p>
              <p className="Valor">R$ {produtos.preco}</p>
              <p className="Parcelas">{produtos.parcela}</p>
              <p><strong>Detalhes:</strong><br />{produtos.detalhes}</p>
              <p>{produtos.encomenda}<br />{produtos.dias_producao}</p>
              <p><strong>Categoria:</strong> {produtos.categoria}</p>
              <a href="/" className="btn btn-primary mb-4">Comprar este produto</a>
              <input type="text" placeholder="Digite seu CEP" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detalhes;