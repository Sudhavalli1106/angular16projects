# Folder - project name & its concept

====================================================================
Easy mart: Data binding, pipes, directives, bootstrap
Data binding: app-product-card
Pipes - app-product-pipes
Directives - app-product-directives
Bootstrap - app component
===================================================================

EasyBuy Proj: Routing & Route param

refer to app component.
Routing: home, product,cart under navbar , Routing example
Route param: routeparamexample
b) Electronic items, electronicitemdetail
====================================================================

Easyshop Proj: Rest API , Services, RxJs, module
For rxjs - refer to rxjs folder
Rest api - orderlist
services - all services
module - normal or common module
==========================================================================

EasyCart - lazy loading, combined together parent & child , @input @output, adding tdf and mdf too, lifecyclehooks

Lazy loading module: orders folder
Parent & child with input, output - Product folder
ProductListComponent (Parent) → Displays a list of products.
ProductItemComponent (Child) → Displays a single product and emits an event when "Add to Cart" is clicked.
Forms: forms folder
lifecyclehooks- lifecycle folder
=============================================================================
ShoppersChoice - Angular state management
ShoppersHub - Angular material

build & deploy
===================================================
Detailing for NgRx:
======================
Ngrx - State management for Angular
Project name: shopperschoice

Step1: ng new shopperschoice
Step 2: create 2 components
ng generate component product-list
ng generate component add-to-cart
Step 3: install ngrx/store - state management
ng add @ngrx/store you can also do ng add @ngrx/store@16
Step 4: Write code for product-list
Step 5: Create stores
STep 6: write code for addtocart
Steo 7: create link in app.comp and configure routes for both the component
Step 8: Run the code
modify angular.json

=======================
Detailing for Angular Material:
==============================
Step 1: Create new project
Step 2: install angular material: ng add @angular/material
The package @angular/material@16.2.14 will be installed and executed.
Would you like to proceed? Yes
? Choose a prebuilt theme name, or "custom" for a custom theme: (Use arrow keys)  
( its as per your wish)
> Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
Set up global Angular Material typography styles? Yes
? Include the Angular animations module? (Use arrow keys) 
Include and enable animation
Step 3: include in app.module.ts

   MatCardModule,
    MatButtonModule,
    MatGridListModule
Step 4: Include angular material in the project
Ref: https://material.angular.io/
=================================
Basic:
=====

Pipes - Built-in & Custom Pipes - This could be explored after Directives to show how data transformation works in Angular.
Directives - Built-in & Custom
Inclusion of Bootstrap
Module - User Created Module & Its Purpose
Services
RESTAPI
Forms - Template Driven Forms (TDF)
Lifecycle Hooks

## Advanced:

@Input() & @Output()
Forms - Model Driven Forms (MDF)
Lazy Loading (Advanced Concepts)
NgRx - Store, Actions, Effects, and Selectors
Angular Material


Reference for Validation in angular:
https://v17.angular.io/guide/form-validation