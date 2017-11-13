const TOKEN = 'kitchen';

export class recipeManager {
  static getToken() {
    return localStorage.getItem(TOKEN);
  }
  static createToken() {
    if (this.getToken() === null) {
      var token = {
        recipes: []
      };

      this.setToken(token);
    }
  }

  static setToken(model) {
    localStorage.setItem(TOKEN, JSON.stringify(model));
  }

  static getParsedToken() {
    return JSON.parse(this.getToken());
  }

  static getRecipeById(localId) {
    var kitchen = this.getParsedToken();
    return kitchen.recipes.find(
      e => e.localId == localId
    );
  }
}
