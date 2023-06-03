import { useState } from "react";

export default function BlogReadingApp() {
  const [tab, setTab] = useState(0);
  let blog;

  if (tab === 0) {
    blog = (
      <>
        <h2>All About Kittens</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi illo
          iusto, perferendis reiciendis perspiciatis consequatur veniam dolore
          iste doloribus quis quia quos animi voluptatum amet magnam sint
          tempora laboriosam voluptatibus!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi illo
          iusto, perferendis reiciendis perspiciatis consequatur veniam dolore
          iste doloribus quis quia quos animi voluptatum amet magnam sint
          tempora laboriosam voluptatibus!
        </p>
      </>
    );
  } else if (tab === 1) {
    blog = (
      <>
        <h2>Cat Behavior and You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          quidem ea veniam blanditiis voluptas aut eum enim, quos quis incidunt
          ut fugit doloremque, mollitia itaque in molestias. Impedit, placeat
          commodi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          numquam, illo error voluptates suscipit aliquid enim repellendus
          facilis, ratione laudantium porro corporis ducimus. Inventore voluptas
          quisquam beatae, corrupti dignissimos voluptates!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quae, rerum fugiat aliquid quia doloribus. Quae perspiciatis eos
          quisquam ea deserunt repudiandae quia? Excepturi architecto dolor
          facere tempore sapiente voluptatum.
        </p>
      </>
    );
  } else if (tab === 2) {
    blog = (
      <>
        <h2>How to Stimulate Your Cat's Mind</h2>
        <p>
          Attack feet behind the couch destroy couch flop over give attitude
          hide when guests come over hopped up on goofballs hunt anything that
          moves swat at dog, flop over intently sniff hand claw drapes make
          muffins chew ipad power cord stand in front of the computer screen
          need to chase tail, inspect anything brought into the house rub face
          on everything lick butt leave dead animals as gifts sweet beast under
          the bed intrigued by the shower flop over. intently sniff hand hide
          when guests come over rub face on everything flop over leave dead
          animals as gifts inspect anything brought into the house stand in
          front of the computer screen chew ipad power cord , swat at dog behind
          the couch destroy couch intrigued by the shower sweet beast under the
          bed make muffins lick butt hopped up on goofballs, need to chase tail
          give attitude hunt anything that moves flop over attack feet claw
          drapes. Need to chase tail hide when guests come over make muffins rub
          face on everything give attitude stand in front of the computer screen
          claw drapes, destroy couch flop over flop over inspect anything
          brought into the house lick butt intently sniff hand hopped up on
          goofballs, leave dead animals as gifts intrigued by the shower sweet
          beast under the bed behind the couch hunt anything that moves. Lick
          butt give attitude intently sniff hand flop over sweet beast under the
          bed intrigued by the shower leave dead animals as gifts flop over
          stand in front of the computer screen rub face on everything, behind
          the couch claw drapes chew ipad power cord hide when guests come over
          hopped up on goofballs inspect anything brought into the house destroy
          couch. Give attitude lick butt chew ipad power cord leave dead animals
          as gifts sweet beast under the bed intrigued by the shower flop over
          rub face on everything make muffins need to chase tail intently sniff
          hand , claw drapes hide when guests come over swat at dog stand in
          front of the computer screen hopped up on goofballs inspect anything
          brought into the house attack feet hunt anything that moves behind the
          couch, destroy couch flop over claw drapes flop over need to chase
          tail hide when guests come over intently sniff hand stand in front of
          the computer screen make muffins.
        </p>
      </>
    );
  } else if (tab === 3) {
    blog = (
      <>
        <h2> Meow (The Cats Took Over Our Blog)</h2>
        <p>
          Attack feet behind the couch destroy couch flop over give attitude
          hide when guests come over hopped up on goofballs hunt anything that
          moves stand in front of the computer screen chase mice make muffins,
          intrigued by the shower flop over sweet beast under the bed swat at
          dog inspect anything brought into the house intently stare at the same
          spot leave dead animals as gifts chew ipad power cord , claw drapes
          lick butt hunt anything that moves intently stare at the same spot
          stand in front of the computer screen hide when guests come over give
          attitude claw drapes attack feet. claw drapes inspect anything brought
          into the house flop over chew ipad power cord swat at dog hunt
          anything that moves flop over hide when guests come over, make muffins
          destroy couch hopped up on goofballs lick butt give attitude sweet
          beast under the bed stand in front of the computer screen , intently
          stare at the same spot chase mice leave dead animals as gifts attack
          feet behind the couch intrigued by the shower flop over. claw drapes
          intently stare at the same spot intrigued by the shower leave dead
          animals as gifts attack feet make muffins destroy couch swat at dog
          behind the couch, chew ipad power cord flop over flop over sweet beast
          under the bed stand in front of the computer screen inspect anything
          brought into the house, chase mice hunt anything that moves lick butt
          give attitude hopped up on goofballs hide when guests come over sweet
          beast under the bed. Hunt anything that moves chew ipad power cord
          hide when guests come over attack feet swat at dog give attitude chase
          mice lick butt inspect anything brought into the house stand in front
          of the computer screen destroy couch intrigued by the shower, flop
          over hopped up on goofballs sweet beast under the bed claw drapes make
          muffins leave dead animals as gifts behind the couch intently stare at
          the same spot flop over, behind the couch intrigued by the shower make
          muffins give attitude chew ipad power cord swat at dog hunt anything
          that moves hide when guests come over flop over. claw drapes chase
          mice behind the couch intently stare at the same spot hopped up on
          goofballs, intrigued by the shower sweet beast under the bed lick
          butt. Leave dead animals as gifts attack feet behind the couch flop
          over stand in front of the computer screen sweet beast under the bed
          destroy couch claw drapes hopped up on goofballs give attitude, chase
          mice hunt anything that moves inspect anything brought into the house
          lick butt intrigued by the shower intently stare at the same spot chew
          ipad power cord swat at dog flop over. stand in front of the computer
          screen lick butt hide when guests come over chase mice swat at dog
          destroy couch leave dead animals as gifts flop over claw drapes, hunt
          anything that moves make muffins flop over inspect anything brought
          into the house intently stare at the same spot give attitude attack
          feet, sweet beast under the bed hopped up on goofballs intrigued by
          the shower behind the couch chew ipad power cord behind the couch.
          Flop over intently stare at the same spot inspect anything brought
          into the house give attitude make muffins hide when guests come over,
          sweet beast under the bed claw drapes hopped up on goofballs attack
          feet swat at dog leave dead animals as gifts, hunt anything that moves
          chase mice chew ipad power cord flop over. Make muffins hopped up on
          goofballs hide when guests come over flop over hunt anything that
          moves attack feet intrigued by the shower give attitude swat at dog,
          lick butt flop over sweet beast under the bed intently stare at the
          same spot stand in front of the computer screen inspect anything
          brought into the house behind the couch claw drapes, chase mice chew
          ipad power cord leave dead animals as gifts destroy couch chase mice
          destroy couch intently stare at the same spot swat at dog. Flop over
          hide when guests come over behind the couch hopped up on goofballs
          chase mice stand in front of the computer screen intently stare at the
          same spot leave dead animals as gifts claw drapes destroy couch, swat
          at dog flop over attack feet chew ipad power cord sweet beast under
          the bed intrigued by the shower lick butt give attitude make muffins,
          hunt anything that moves inspect anything brought into the house claw
          drapes lick butt give attitude leave dead animals as gifts stand in
          front of the computer screen inspect anything brought into the house.
          Give attitude claw drapes hide when guests come over hopped up on
          goofballs lick butt chew ipad power cord stand in front of the
          computer screen chase mice flop over, attack feet leave dead animals
          as gifts intrigued by the shower behind the couch destroy couch sweet
          beast under the bed swat at dog make muffins flop over hunt anything
          that moves, intently stare at the same spot inspect anything brought
          into the house stand in front of the computer screen sweet beast under
          the bed hunt anything that moves lick butt chase mice hide when guests
          come over. Chase mice claw drapes lick butt give attitude destroy
          couch flop over chew ipad power cord intently stare at the same spot,
          intrigued by the shower hunt anything that moves leave dead animals as
          gifts behind the couch hide when guests come over hopped up on
          goofballs. Chase mice claw drapes flop over destroy couch intrigued by
          the shower swat at dog leave dead animals as gifts intently stare at
          the same spot hopped up on goofballs sweet beast under the bed, behind
          the couch give attitude chew ipad power cord make muffins hide when
          guests come over attack feet hunt anything that moves lick butt
          inspect anything brought into the house, flop over stand in front of
          the computer screen claw drapes behind the couch stand in front of the
          computer screen chase mice hide when guests come over give attitude.
          Hunt anything that moves inspect anything brought into the house hide
          when guests come over make muffins hopped up on goofballs chase mice,
          flop over leave dead animals as gifts intrigued by the shower flop
          over attack feet sweet beast under the bed swat at dog, claw drapes
          stand in front of the computer screen chew ipad power cord lick butt
          destroy couch. Hopped up on goofballs intrigued by the shower behind
          the couch flop over leave dead animals as gifts sweet beast under the
          bed hunt anything that moves intently stare at the same spot flop
          over, attack feet stand in front of the computer screen make muffins
          give attitude swat at dog chase mice lick butt, claw drapes hide when
          guests come over destroy couch chew ipad power cord inspect anything
          brought into the house leave dead animals as gifts flop over. stand in
          front of the computer screen flop over make muffins inspect anything
          brought into the house chase mice claw drapes intently stare at the
          same spot hopped up on goofballs, give attitude attack feet behind the
          couch intrigued by the shower swat at dog destroy couch, sweet beast
          under the bed hide when guests come over flop over lick butt leave
          dead animals as gifts hunt anything that moves.
        </p>
      </>
    );
  }

  return (
    <>
      <h1>Blog Reading App</h1>
      <main style={{ display: "flex" }}>
        <aside
          style={{ width: "300px", display: "flex", flexDirection: "column" }}
        >
          <button onClick={() => setTab(0)}>All About Kittens</button>
          <button onClick={() => setTab(1)}>Cat Behavior and You</button>
          <button onClick={() => setTab(2)}>
            How to Stimulate Your Cat's Mind
          </button>
          <button onClick={() => setTab(3)}>
            Meow (The Cats Took Over Our Blog)
          </button>
        </aside>
        <section style={{ width: "600px" }}>{blog}</section>
      </main>
    </>
  );
}
