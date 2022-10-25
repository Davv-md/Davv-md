import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { ListAccountsRequestFilterSensitiveLog, ListAccountsResponseFilterSensitiveLog, } from "../models/models_0";
import { deserializeAws_restJson1ListAccountsCommand, serializeAws_restJson1ListAccountsCommand, } from "../protocols/Aws_restJson1";
export class ListAccountsCommand extends $Command {
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSOClient";
        const commandName = "ListAccountsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: ListAccountsRequestFilterSensitiveLog,
            outputFilterSensitiveLog: ListAccountsResponseFilterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return serializeAws_restJson1ListAccountsCommand(input, context);
    }
    deserialize(output, context) {
        return deserializeAws_restJson1ListAccountsCommand(output, context);
    }
}
