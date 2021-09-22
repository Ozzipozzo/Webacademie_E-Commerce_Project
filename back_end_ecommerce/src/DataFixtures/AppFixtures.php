<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        for($i=000; $i < 20; $i++) {
            $product = new Product();

            $product->setName('Blue Dream 4G');
            $product->setDescription('On ne présente plus la BlueDream, l\'une des variétés de fleurs de cannabis CBD Suisse la plus célèbre. Celle-ci présente de belles fleurs denses et résineuses. Tres odorante, elle propose une saveur fruitée qui rappelle la mangue. A déguster sans modération. Cultivée sous serre.');
            $product->setPrice('3€');
            $product->setImg('https://www.achat-cbd-suisse.com/produits/img5f0ef9df532fd.jpg');
            $manager->persist($product);
        }

        $manager->flush();
    }
}
