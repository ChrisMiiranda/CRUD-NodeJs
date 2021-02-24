import http from "../http-common";

class ListagemDataService {
    getAll() {
      return http.get("/usuarios");
    }
  
    get(id) {
      return http.get(`/usuarios/${id}`);
    }
  
    delete(id) {
      return http.put(`/usuarios/delete/${id}`);
    }
  }
  
  export default new ListagemDataService();