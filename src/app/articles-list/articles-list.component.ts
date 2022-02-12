import { Component, OnInit } from "@angular/core";
import { Article } from "../common/article";
import { ArticleService } from "../common/article.service";

@Component({
  selector: "app-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.css"],
})
export class ArticlesListComponent implements OnInit {
  // Model de donée d'un article
  article: Article;
  // Liste des articles disponnible
  articles: Article[];

  // constructor(private _articleService: ArticleService) {}

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.refreshArticles();
    this.article = new Article();
  }

  public createArticle(article): void {
    this.articleService.createArticle(article);
    this.refreshArticles();
    this.article = new Article();
  }

  public deleteArticle(article: Article): void {
    this.articleService.deleteArticle(article.id);
    this.refreshArticles();
  }

  private refreshArticles(): void {
    this.articles = this.articleService.articles;
  }

  /*ngOnInit() {
    // Récupération des articles à partir du local storage
    this.articles = this._articleService.getFromLocalStorage();
    // Initialisation du model de donnée
    this.article = new Article();
  }*/

  /**
   * Création d'un nouvel article et ajout au tableau
   * @param article Nouvelle article
   */
  /* createArticle(article) {
    // Ajout de l'article à la liste des articles
    this._articleService.createArticle(article);
    // Réinitialisation du model
    this.article = new Article();
  }*/

  /**
   * Suppréssion d'un article
   * @param article Article à supprimer
   */
  /*deleteArticle(article: Article) {
    this._articleService.deleteArticle(article);
  }*/

  /**
   * Récupération du tableau d'articles stocké dans le local storage
   */
  /*getFromLocalStorage(): Article[] {
    return this._articleService.getFromLocalStorage();
  }*/
}
