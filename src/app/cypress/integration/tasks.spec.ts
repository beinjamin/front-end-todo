/// <reference types="cypress" />

// Début de la suite de tests pour les fonctionnalités de gestion des tâches.
describe('Tests des fonctionnalités de gestion des tâches', () => {
    // URL de base de l'application Angular. À ajuster si nécessaire.
    const baseUrl = 'http://localhost:4200'; 
    // Exemple de tâche à utiliser dans les tests.
    const task = { 
      id: '1', 
      name: 'Tâche de test', 
      description: 'Description de la tâche de test' 
    };
  
    // Cette méthode est exécutée avant chaque test.
    beforeEach(() => {
      // Visite l'URL de base pour s'assurer que chaque test commence dans un état propre.
      cy.visit(baseUrl);
    });
  
    // Test pour vérifier la création d'une nouvelle tâche.
    it('Créer une nouvelle tâche', () => {
      // Remplit le champ de saisie pour le nom de la tâche.
      cy.get('input[name="taskName"]').type(task.name); 
      // Remplit le champ de saisie pour la description de la tâche.
      cy.get('textarea[name="taskDescription"]').type(task.description); 
      // Clique sur le bouton de soumission pour créer la tâche.
      cy.get('button[type="submit"]').click(); 
  
      // Vérifie qu'un message de succès s'affiche après la création de la tâche.
      cy.contains('Tâche créée avec succès').should('be.visible'); 
    });
  
    // Test pour vérifier la récupération de la liste de toutes les tâches.
    it('Récupérer la liste de toutes les tâches', () => {
      // Clique sur le bouton pour charger les tâches existantes.
      cy.get('button[id="loadTasks"]').click(); 
  
      // Sélectionne la liste des tâches et vérifie qu'elle contient au moins une tâche.
      cy.get('.task-list') 
        .children() // Récupère tous les éléments enfants de la liste.
        .should('have.length.greaterThan', 0); // Vérifie qu'il y a au moins une tâche dans la liste.
    });
  
    // Test pour récupérer une tâche spécifique par son ID.
    it('Récupérer une tâche spécifique par son ID', () => {
      // Remplit le champ de saisie avec l'ID de la tâche à récupérer.
      cy.get('input[name="taskId"]').type(task.id); 
      // Clique sur le bouton pour récupérer la tâche par son ID.
      cy.get('button[id="getTask"]').click(); 
  
      // Vérifie que le nom de la tâche s'affiche correctement.
      cy.contains(task.name).should('be.visible'); 
    });
  
    // Test pour mettre à jour une tâche spécifique par son ID.
    it('Mettre à jour une tâche spécifique par son ID', () => {
      // Remplit le champ de saisie avec l'ID de la tâche à mettre à jour.
      cy.get('input[name="taskId"]').type(task.id); 
      // Clique sur le bouton pour récupérer la tâche à mettre à jour.
      cy.get('button[id="getTask"]').click(); 
  
      // Efface le champ du nom de la tâche et entre un nouveau nom.
      cy.get('input[name="taskName"]').clear().type('Tâche mise à jour'); 
      // Clique sur le bouton pour mettre à jour la tâche.
      cy.get('button[id="updateTask"]').click(); 
  
      // Vérifie qu'un message de succès s'affiche après la mise à jour de la tâche.
      cy.contains('Tâche mise à jour avec succès').should('be.visible'); 
    });
  
    // Test pour supprimer une tâche spécifique par son ID.
    it('Supprimer une tâche spécifique par son ID', () => {
      // Remplit le champ de saisie avec l'ID de la tâche à supprimer.
      cy.get('input[name="taskId"]').type(task.id); 
      // Clique sur le bouton pour supprimer la tâche.
      cy.get('button[id="deleteTask"]').click(); 
  
      // Vérifie qu'un message de succès s'affiche après la suppression de la tâche.
      cy.contains('Tâche supprimée avec succès').should('be.visible'); 
    });
  });
  