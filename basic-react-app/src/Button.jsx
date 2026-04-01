function printHello() {
  console.log("Print Hello!");
}

function printBye() {
  console.log("Bye!");
}

function dblClick() {
  console.log("You Dubbled Clicked!");
}

export function Button() {
  return (
    <>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={printBye}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        recusandae quod ipsa unde in. Consequuntur ex nostrum dignissimos ipsa
        inventore aliquam excepturi tenetur incidunt quod, at deserunt
        distinctio vel fugiat! Voluptas, quo quasi, repellendus suscipit optio
        ab nulla libero dicta reprehenderit ex nemo tempore eius at, quod
        distinctio quibusdam nobis laboriosam! Labore beatae pariatur minus
        exercitationem! Est repellendus magni nisi? Ab sint, saepe, odit aliquam
        quo aspernatur magni incidunt harum voluptas quam dolor aperiam iure
        non! Quia fugiat dolores, magnam sequi obcaecati facere ullam illo, ab
        deleniti quaerat sunt recusandae? Nostrum delectus maiores quibusdam et
        temporibus at veniam fugit ut distinctio sed, voluptate consequatur
        itaque sunt expedita, id quia facilis modi impedit asperiores in. Optio
        pariatur explicabo cupiditate nihil corrupti? Neque modi corrupti
        inventore quod soluta optio dicta illum nisi distinctio cupiditate.
        Totam eum, enim error voluptatem facilis tempora sed animi veritatis,
        nisi cum libero! Quos nam vel debitis odio!
      </p>
      <button onDoubleClick={dblClick}>Dubble Click me!</button>
    </>
  );
}
