interface MajorCredits{
    credits: number;
    brand: String;
}

interface MinorCredits {
    credits: number;
    brand: String;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits){
    return {
        credits: subject1.credits + subject2.credits,
        brand: `Sum_${subject1.brand}_${subject2.brand}`,
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits){
    return {
        credits: subject1.credits + subject2.credits,
        brand: `Sum_${subject1.brand}_${subject2.brand}`, 
    };
}