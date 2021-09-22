<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserAdress
 *
 * @ORM\Table(name="user_adress", indexes={@ORM\Index(name="IDX_39BEDC83A76ED395", columns={"user_id"})})
 * @ORM\Entity
 */
class UserAdress
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="adress_line1", type="text", length=0, nullable=false)
     */
    private $adressLine1;

    /**
     * @var string|null
     *
     * @ORM\Column(name="adress_line2", type="text", length=0, nullable=true)
     */
    private $adressLine2;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=64, nullable=false)
     */
    private $city;

    /**
     * @var int
     *
     * @ORM\Column(name="postal_code", type="integer", nullable=false)
     */
    private $postalCode;

    /**
     * @var string
     *
     * @ORM\Column(name="country", type="string", length=255, nullable=false)
     */
    private $country;

    /**
     * @var int
     *
     * @ORM\Column(name="mobile", type="integer", nullable=false)
     */
    private $mobile;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdressLine1(): ?string
    {
        return $this->adressLine1;
    }

    public function setAdressLine1(string $adressLine1): self
    {
        $this->adressLine1 = $adressLine1;

        return $this;
    }

    public function getAdressLine2(): ?string
    {
        return $this->adressLine2;
    }

    public function setAdressLine2(?string $adressLine2): self
    {
        $this->adressLine2 = $adressLine2;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getPostalCode(): ?int
    {
        return $this->postalCode;
    }

    public function setPostalCode(int $postalCode): self
    {
        $this->postalCode = $postalCode;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getMobile(): ?int
    {
        return $this->mobile;
    }

    public function setMobile(int $mobile): self
    {
        $this->mobile = $mobile;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }


}
