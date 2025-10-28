export const getExampleTasks = async () => {
      const response = await fetch("/To-do-list-5/exampleTasks.json")

      if(!response.ok) {
        new Error(response.statusText);
      }

      return await response.json();
};