<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    /**
     * @Route("/api/registration", name="api_registration", methods={"POST"})
     * @Template()
     */
    public function registration(Request $request)
    {   
        // dd($request->getContent());
        // $data = json_decode(($request->request->all()));
        dd($request->getContent());
        $user = new User();
        $data = json_decode($request->getContent(), true);
        
        $user->setUsername($data['username']);
        $user->setPassword($data['password']);
        $user->setFirstname($data['firstname']);
        $user->setLastname($data['lastname']);
        $user->setPhone($data['telephone']);
        

        // Encode the new users password
        $user->setPassword($this->passwordHasher->hashPassword($user, $data['password']));

        // Save
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new Response('success', 200);
        // return new RedirectResponse('http://localhost:3000/Connexion');
        
    }


    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     * @Template()
     */
    public function login(Request $request)
    {

        $em = $this->getDoctrine()->getManager();

        $data = json_decode($request->getContent(), true);
        $user = $em->getRepository(User::class)->findOneBy(['username' => $data['username']]);
        if($user){
            if($this->passwordHasher->isPasswordValid($user, $data['password']))
            {
                return new JsonResponse(
                    [
                        'id'=>$user->getId(),
                        'username'=>$user->getUsername(),
                        'firstname'=>$user->getFirstname(),
                        'lastname'=>$user->getLastname(),
                        'phone'=>$user->getPhone()
                    ]
                );
            }

       
        $em->persist($user);
        $em->flush();

        return new Response('success', 200);

        }
    }
}