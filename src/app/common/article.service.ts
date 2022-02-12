import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Article } from "angular-services-atelier-master/src/app/common/article";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  //private articles: Article[] = [];
  private deletedArticles: Article[] = [];
  //FEOM THE TEACHER
  private _articles: Article[] = [];

  constructor() {
    this._articles = this.getFromLocalStorage();
  }

  get articles(): Article[] {
    return [...this._articles];
  }

  public createArticle(article: Article): void {
    this._articles.push(article);
  }

  public deleteArticle(id: string): void {
    const index = this._articles.findIndex((x) => x.id === id);
    this._articles.splice(index, 1);

    //Ajout dans une liste de suppression
    this.deletedArticles.push(this._articles[index]);
  }

  private getFromLocalStorage(): Article[] {
    const stringData = localStorage.getItem("articles");
    const articles: Article[] = JSON.parse(stringData);

    return articles;
  }

  /* getFromLocalStorage(): Article[] {
    // Récupération des artciles en format 'string'
    const stringData = localStorage.getItem("articles");
    // Converstion des données de type 'string' en objet Javascript
    this.articles = JSON.parse(stringData);

    return this.articles;
  }*/

  /*deleteArticle(article: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex((x) => x.id === article.id);
    // Suppréssion de l'article du tableau
    this.articles.splice(index, 1);

    //Ajout dans une liste de suppression
    this.deletedArticles.push(article);
  }*/

  /* createArticle(article) {
    // Ajout de l'article à la liste des articles
    this.articles.push(article);
  }*/

  restoreDeletedArticle(deletedArticles: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.deletedArticles.findIndex(
      (x) => x.id === deletedArticles.id
    );
    // Suppréssion de l'article du tableau
    this.deletedArticles.splice(index, 1);
  }

  getArticles() {
    return [...this.articles];
  }

  getDeletedArticles() {
    return this.deletedArticles;
  }
}
