/// <reference types="cypress" />

describe('Tests des fonctionnalités de gestion des tâches', () => {
    const baseUrl = 'http://localhost:4200'; // Changez cette URL si nécessaire
    const task = { id: '1', name: 'Tâche de test', description: 'Description de la tâche de test' }; // Exemple de tâche
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Créer une nouvelle tâche', () => {
      cy.get('input[name="taskName"]').type(task.name); // Assurez-vous que ce sélecteur est correct
      cy.get('textarea[name="taskDescription"]').type(task.description); // Assurez-vous que ce sélecteur est correct
      cy.get('button[type="submit"]').click(); // Assurez-vous que ce sélecteur est correct
  
      cy.contains('Tâche créée avec succès').should('be.visible'); // Vérifiez le message de succès
    });
  
    it('Récupérer la liste de toutes les tâches', () => {
      cy.get('button[id="loadTasks"]').click(); // Assurez-vous que ce sélecteur est correct
  
      cy.get('.task-list') // Assurez-vous que ce sélecteur correspond à votre liste de tâches
        .children() // Récupère tous les éléments enfants de la liste
        .should('have.length.greaterThan', 0); // Vérifiez qu'il y a au moins une tâche
    });
  
    it('Récupérer une tâche spécifique par son ID', () => {
      cy.get('input[name="taskId"]').type(task.id); // Assurez-vous que ce sélecteur est correct
      cy.get('button[id="getTask"]').click(); // Assurez-vous que ce sélecteur est correct
  
      cy.contains(task.name).should('be.visible'); // Vérifiez que la tâche s'affiche
    });
  
    it('Mettre à jour une tâche spécifique par son ID', () => {
      cy.get('input[name="taskId"]').type(task.id); // Assurez-vous que ce sélecteur est correct
      cy.get('button[id="getTask"]').click(); // Assurez-vous que ce sélecteur est correct
  
      cy.get('input[name="taskName"]').clear().type('Tâche mise à jour'); // Remplacez avec le sélecteur correct
      cy.get('button[id="updateTask"]').click(); // Assurez-vous que ce sélecteur est correct
  
      cy.contains('Tâche mise à jour avec succès').should('be.visible'); // Vérifiez le message de succès
    });
  
    it('Supprimer une tâche spécifique par son ID', () => {
      cy.get('input[name="taskId"]').type(task.id); // Assurez-vous que ce sélecteur est correct
      cy.get('button[id="deleteTask"]').click(); // Assurez-vous que ce sélecteur est correct
  
      cy.contains('Tâche supprimée avec succès').should('be.visible'); // Vérifiez le message de succès
    });
  });
  