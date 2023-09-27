import {Button} from "@chakra-ui/react";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import Link from "next/link";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import React from "react";

const SocialButtons : React.FC = () => {
    return (
        <div className="flex flex-row pt-52 gap-4">
            <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<FaLinkedin />}
            >
                <Link
                    href="https://www.linkedin.com/in/harrisonfranciscoduval/"
                    target="_blank"
                >
                    LinkedIn
                </Link>
            </Button>
            <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<FaGithub />}
            >
                <Link
                    href="https://github.com/hfduval"
                    target="_blank"
                >
                    Github
                </Link>
            </Button>
        </div>
    );
};

export default SocialButtons