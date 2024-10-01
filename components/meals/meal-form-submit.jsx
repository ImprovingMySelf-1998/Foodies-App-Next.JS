"use client";
import { useFormStatus } from "react-dom";
function MealFormSubmit() {
  const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save Meal"}
         </button>
    );
}

export default MealFormSubmit;
