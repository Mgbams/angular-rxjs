import { Component, OnInit } from "@angular/core";
import { Article } from "../common/article";
import { ArticleService } from "../common/article.service";

@Component({
  selector: "app-articles-list-deleted",
  templateUrl: "./articles-list-deleted.component.html",
  styleUrls: ["./articles-list-deleted.component.css"],
})
export class ArticlesListDeletedComponent implements OnInit {
  // Liste des articles non disponnible
  articlesDeleted: Article[];

  constructor(private _articleService: ArticleService) {}

  ngOnInit() {
    // TODO récupération des articles non disponible à partir d'un service
    this.articlesDeleted = this._articleService.getDeletedArticles();
  }

  /**
   * Restaure un article supprimé
   */
  restore(article) {
    // TODO réstauration de l'article à partir d'un service
    this._articleService.createArticle(article);

    //Supprimer du liste de deleted
    this._articleService.restoreDeletedArticle(article);
  }
}
