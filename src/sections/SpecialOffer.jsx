import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Oferta </span>
          Especial
        </h2>
        <p className='mt-4 info-text'>
        Embarque em uma jornada de compras que redefine sua experiência com ofertas imbatíveis. Desde seleções de primeira linha até economias incríveis, oferecemos um valor incomparável que nos diferencia no mercado.
        </p>
        <p className='mt-6 info-text'>
        Navegue por um mundo de possibilidades projetadas para satisfazer seus desejos únicos, superando as expectativas mais elevadas. Sua jornada conosco é nada menos que excepcional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Compre agora' iconURL={arrowRight} />
          <Button
            label='Aprenda mais'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;