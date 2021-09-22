<?php

namespace App\Controller;

use App\Repository\ProductCategoryRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductCategoryController extends AbstractController
{
    /**
     * @Route("/api/category", name="api_category")
     */
    public function index(ProductCategoryRepository $productCategoryRepository): Response
    {
        return $this->json($productCategoryRepository->findAll(), 200, []);

    }

        /**
     * @Route("/api/category/{id}", name="api_details_category")
     */
    public function test(ProductRepository $productRepository, $id): Response
    {
        return $this->json($productRepository->findBy(['categoryId' => $id]));

    }
}
