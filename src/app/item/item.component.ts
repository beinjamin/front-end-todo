
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: any[] = []; // Tableau pour stocker les éléments

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems(); // Appeler la méthode pour récupérer les éléments lors de l'initialisation du composant
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.items = data; // Assigner les données récupérées à la variable items
      },
      (error) => {
        console.error('Erreur lors de la récupération des éléments:', error);
      }
    );
  }
}
