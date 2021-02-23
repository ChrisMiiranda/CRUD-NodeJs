import http from "../http-common";

class CadastroService {

    create(data) {
        return http.post("/usuarios", data);
    }

}

export default new CadastroService();