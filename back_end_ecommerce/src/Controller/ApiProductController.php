<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiProductController extends AbstractController
{
    /**
     * @Route("/api/product", name="api_product", methods={"GET"})
     */
    public function index(ProductRepository $productRepository): Response
    {

        // Normalizing and serialize response 

        return $this->json($productRepository->findAll(), 200, []);

        // return $this->render('api_product/index.html.twig', [
        //     'controller_name' => 'ApiProductController',
        // ]);  
    }

    /**
     * @Route("/api/details_product/{id}", name="api_details_product")
     */
    public function details_product(ProductRepository $productRepository, $id): Response
    {
        return $this->json($productRepository->findBy(['id' => $id]));
    }
}
